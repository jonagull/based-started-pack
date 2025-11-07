using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using BackendApi.Models;
using BackendApi.Models.Auth;
using BackendApi.Models.User;
using BackendApi.Services.Auth;

namespace BackendApi.Controllers;

[ApiController]
[Route("auth")]
public class AuthController(IAuthService authService) : ControllerBase
{
    [HttpPost("login")]
    [AllowAnonymous]
    public async Task<ActionResult<ApiResponse<AuthSdto>>> Login([FromBody] LoginRdto request)
    {
        var (success, response, error) = await authService.LoginAsync(request);

        if (!success)
            return Ok(new ApiResponse<AuthSdto>
            {
                Success = false,
                StatusCode = ApiResponseStatusCode.Unauthorized,
                Message = error,
                Data = null
            });

        return Ok(new ApiResponse<AuthSdto>
        {
            Success = true,
            StatusCode = ApiResponseStatusCode.Success,
            Message = "Login successful",
            Data = response
        });
    }

    [HttpPost("register")]
    [AllowAnonymous]
    public async Task<ActionResult<ApiResponse<AuthSdto>>> Register([FromBody] RegisterRdto request)
    {
        var (success, response, error) = await authService.RegisterAsync(request);

        if (!success)
            return Ok(new ApiResponse<AuthSdto>
            {
                Success = false,
                StatusCode = ApiResponseStatusCode.BadRequest,
                Message = error,
                Data = null
            });

        return Ok(new ApiResponse<AuthSdto>
        {
            Success = true,
            StatusCode = ApiResponseStatusCode.Created,
            Message = "Registration successful",
            Data = response
        });
    }

    [HttpGet("me")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<UserSdto>>> GetCurrentUser()
    {
        var userId = User.FindFirst(System.Security.Claims.ClaimTypes.NameIdentifier)?.Value;

        if (string.IsNullOrEmpty(userId))
            return Ok(new ApiResponse<UserSdto>
            {
                Success = false,
                StatusCode = ApiResponseStatusCode.Unauthorized,
                Message = "User not authenticated",
                Data = null
            });

        var user = await authService.GetUserByIdAsync(Guid.Parse(userId));

        if (user == null)
            return Ok(new ApiResponse<UserSdto>
            {
                Success = false,
                StatusCode = ApiResponseStatusCode.NotFound,
                Message = "User not found",
                Data = null
            });

        return Ok(new ApiResponse<UserSdto>
        {
            Success = true,
            StatusCode = ApiResponseStatusCode.Success,
            Message = null,
            Data = new UserSdto
            {
                Id = user.Id,
                Email = user.Email,
                FirstName = user.FirstName,
                LastName = user.LastName,
                IsActive = user.IsActive
            }
        });
    }

    [HttpPost("logout")]
    [Authorize]
    public async Task<ActionResult<ApiResponse<object>>> Logout()
    {
        await authService.LogoutAsync();
        return Ok(new ApiResponse<object>
        {
            Success = true,
            StatusCode = ApiResponseStatusCode.Success,
            Message = "Logout successful",
            Data = null
        });
    }
}
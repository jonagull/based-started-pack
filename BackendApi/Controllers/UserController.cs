using Microsoft.AspNetCore.Mvc;
using BackendApi.Models.User;
using BackendApi.Repositories.User;
using BackendApi.Models;

namespace BackendApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UserController(IUserRepository userRepository) : BaseAuthenticatedController
{
    [HttpPut("update")]
    public async Task<ActionResult<ApiResponse<object>>> UpdateUser([FromBody] UpdateUserRdto request)
    {
        var userId = GetUserId();
        var user = await userRepository.GetByIdAsync(userId);
        
        if (user == null)
            return Ok(new ApiResponse<object>
            {
                Success = false,
                StatusCode = ApiResponseStatusCode.NotFound,
                Message = "User not found",
                Data = null
            });

        if (!string.IsNullOrWhiteSpace(request.FirstName))
            user.FirstName = request.FirstName;


        if (!string.IsNullOrWhiteSpace(request.LastName))
            user.LastName = request.LastName;

        await userRepository.UpdateAsync(user);

        return Ok(new ApiResponse<object>
        {
            Success = true,
            StatusCode = ApiResponseStatusCode.Success,
            Message = "User updated successfully",
            Data = null
        });
    }
}
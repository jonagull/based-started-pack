using BackendApi.Entities;
using BackendApi.Models.Auth;

namespace BackendApi.Services.Auth;

public interface IAuthService
{
    Task<(bool success, AuthSdto? response, string? error)> LoginAsync(LoginRdto request);
    Task<(bool success, AuthSdto? response, string? error)> RegisterAsync(RegisterRdto request);
    Task<User?> GetUserByIdAsync(Guid userId);
    Task<bool> LogoutAsync();
}
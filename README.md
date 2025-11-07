# Full-Stack Application

A modern full-stack application built with Next.js and .NET, featuring JWT authentication, PostgreSQL database, and a clean architecture.

## 🛠️ Technology Stack

### Backend

-   **.NET 8.0** - Web API framework
-   **PostgreSQL 16** - Relational database
-   **Entity Framework Core 8.0** - ORM with automatic migrations
-   **JWT Bearer Authentication** - Token-based authentication with refresh tokens
-   **BCrypt.Net** - Password hashing
-   **Swagger/OpenAPI** - API documentation
-   **ASP.NET Core** - Web framework

### Frontend

-   **Next.js 15.5.2** - React framework with App Router
-   **React 19** - UI library
-   **TypeScript 5** - Type-safe JavaScript
-   **Tailwind CSS 4** - Utility-first CSS framework
-   **TanStack Query (React Query) 5** - Server state management
-   **TanStack Form 1** - Form state management
-   **Zod 4** - Schema validation
-   **Zustand 5** - Client state management
-   **Axios** - HTTP client with automatic token refresh
-   **Radix UI** - Accessible component primitives
-   **Lucide React** - Icon library

### Infrastructure

-   **Docker Compose** - PostgreSQL containerization
-   **pnpm** - Package manager (Node.js >=18, pnpm >=8)

## 📁 Project Structure

```
├── BackendApi/              # .NET 8.0 Web API
│   ├── Configuration/       # Service configuration (Auth, CORS, Database, etc.)
│   ├── Controllers/         # API endpoints
│   ├── Data/                # DbContext and database setup
│   ├── Entities/            # Domain models
│   ├── Migrations/          # EF Core database migrations
│   ├── Models/              # DTOs (Request/Response models)
│   ├── Repositories/        # Data access layer
│   └── Services/            # Business logic layer
│
└── web/                     # Next.js frontend
    ├── src/
    │   ├── app/             # Next.js App Router pages
    │   ├── components/      # React components
    │   └── lib/             # Utilities and validations
    └── shared/              # Shared code between frontend modules
        ├── api/             # API client and endpoints
        ├── hooks/           # Custom React hooks
        ├── stores/          # Zustand stores
        └── types/           # TypeScript type definitions
```

## 🚀 Getting Started

### Prerequisites

-   **.NET 8.0 SDK** - [Download](https://dotnet.microsoft.com/download/dotnet/8.0)
-   **Node.js 18+** - [Download](https://nodejs.org/)
-   **pnpm 8+** - Install with `npm install -g pnpm`
-   **Docker & Docker Compose** - [Download](https://www.docker.com/products/docker-desktop)

### Backend Setup

1. **Start PostgreSQL database:**

    ```bash
    cd BackendApi
    docker-compose up -d
    ```

    This starts PostgreSQL on port `5555` with:

    - Database: `backendapi_db`
    - Username: `backendapi_user`
    - Password: `backendapi_password`

2. **Configure connection string** (if needed):
   The default connection string in `appsettings.json` points to:

    ```
    Host=localhost;Port=5555;Database=backendapi_db;Username=backendapi_user;Password=backendapi_password
    ```

3. **Run the backend:**
    ```bash
    cd BackendApi
    dotnet run
    ```
    The API will be available at `http://localhost:5157`
    - Swagger UI: `http://localhost:5157/swagger`

**Note:** Database migrations are automatically applied on application startup.

### Frontend Setup

1. **Install dependencies:**

    ```bash
    cd web
    pnpm install
    ```

2. **Configure API URL** (optional):
   Create a `.env.local` file in the `web` directory:

    ```env
    NEXT_PUBLIC_API_URL=http://localhost:5157
    ```

    If not set, it defaults to `http://localhost:5157`

3. **Run the development server:**
    ```bash
    cd web
    pnpm dev
    ```
    The application will be available at `http://localhost:3000`

## 🏃 Development Commands

### Backend

```bash
cd BackendApi

# Run the application
dotnet run

# Build the application
dotnet build

# Create a new migration
dotnet ef migrations add MigrationName

# Update database with migrations
dotnet ef database update
```

### Frontend

```bash
cd web

# Start development server (with Turbopack)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run linter
pnpm lint

# Fix linting issues
pnpm lint:fix

# Format code
pnpm format

# Check code formatting
pnpm format:check
```

## 🔐 Authentication

The application uses JWT-based authentication with the following features:

-   **Access Tokens** - Short-lived (15 minutes by default)
-   **Refresh Tokens** - Long-lived (7 days by default)
-   **Cookie-based** - Tokens stored in HTTP-only cookies for web clients
-   **Automatic Refresh** - Frontend automatically refreshes expired tokens
-   **Password Hashing** - BCrypt for secure password storage

### API Endpoints

-   `POST /auth/register` - Register a new user
-   `POST /auth/login` - Login and receive tokens
-   `POST /auth/refresh` - Refresh access token
-   `GET /user` - Get current user (authenticated)
-   `PUT /user` - Update user profile (authenticated)

## 🗄️ Database

-   **Database:** PostgreSQL 16
-   **ORM:** Entity Framework Core
-   **Migrations:** Automatic on application startup
-   **Port:** 5555 (mapped from container port 5432)

To reset the database:

```bash
cd BackendApi
docker-compose down -v  # Removes volumes
docker-compose up -d    # Recreates database
```

## 🔧 Configuration

### Backend Configuration

Edit `BackendApi/appsettings.json` or `appsettings.Development.json`:

-   **Database Connection:** `ConnectionStrings:DefaultConnection`
-   **JWT Settings:** `Jwt:SecretKey`, `Jwt:Issuer`, `Jwt:Audience`
-   **Token Expiration:** `Jwt:AccessTokenExpirationMinutes`, `Jwt:RefreshTokenExpirationDays`

### Frontend Configuration

-   **API URL:** Set `NEXT_PUBLIC_API_URL` environment variable
-   **TypeScript Paths:** Configured in `tsconfig.json` (`@/*` and `@shared`)

## 📝 Code Quality

### Backend

-   Nullable reference types enabled
-   Implicit usings enabled
-   Clean architecture with separation of concerns

### Frontend

-   TypeScript strict mode
-   ESLint for linting
-   Prettier for code formatting
-   Path aliases for cleaner imports

## 🐳 Docker

The project includes Docker Compose configuration for PostgreSQL:

```bash
# Start database
docker-compose up -d

# Stop database
docker-compose down

# View logs
docker-compose logs -f postgres
```

## 📚 API Documentation

When the backend is running, visit `http://localhost:5157/swagger` for interactive API documentation.

## 🏗️ Architecture

### Backend Architecture

-   **Controllers** - Handle HTTP requests/responses
-   **Services** - Business logic layer
-   **Repositories** - Data access abstraction
-   **Entities** - Domain models
-   **DTOs** - Data transfer objects (Request/Response models)
-   **Configuration** - Modular service configuration

### Frontend Architecture

-   **App Router** - Next.js 15 App Router for routing
-   **Server Components** - Default React Server Components
-   **Client Components** - Interactive components with `"use client"`
-   **Shared Module** - Reusable code (API client, hooks, stores, types)
-   **Component Library** - Radix UI primitives with custom styling

## 🔄 State Management

-   **Server State:** TanStack Query for API data
-   **Client State:** Zustand for global client state (auth, UI state)
-   **Form State:** TanStack Form with Zod validation

## 🎨 Styling

-   **Tailwind CSS 4** - Utility-first CSS
-   **Radix UI** - Accessible component primitives
-   **Custom Components** - Built on top of Radix UI
-   **Responsive Design** - Mobile-first approach

## 📦 Package Management

-   **Backend:** NuGet packages (managed via `.csproj`)
-   **Frontend:** pnpm (configured in `package.json`)

## 🚨 Troubleshooting

### Database Connection Issues

-   Ensure Docker is running
-   Check if PostgreSQL container is up: `docker ps`
-   Verify connection string in `appsettings.json`

### Port Conflicts

-   Backend default: `5157` (change in `launchSettings.json`)
-   Frontend default: `3000` (change in `package.json` scripts)
-   Database: `5555` (change in `docker-compose.yml`)

### Frontend API Errors

-   Verify `NEXT_PUBLIC_API_URL` matches backend URL
-   Check CORS configuration in backend
-   Ensure backend is running

## 📄 License

This is a starter template project.

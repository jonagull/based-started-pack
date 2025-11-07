'use client'

import { useAuthCheck } from '@shared'
import ContentWrapper from '@/components/layout/ContentWrapper'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Home() {
  useAuthCheck()

  return (
    <ContentWrapper>
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">C# + Next.js Starter Template</h1>
          <p className="text-xl text-muted-foreground">
            A modern, production-ready full-stack application template with authentication, type safety, and best
            practices built-in.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Backend
                <Badge variant="secondary">C# .NET 8</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• ASP.NET Core Web API</li>
                <li>• Entity Framework Core</li>
                <li>• PostgreSQL Database</li>
                <li>• JWT Authentication</li>
                <li>• Cookie-based Sessions</li>
                <li>• Swagger/OpenAPI</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Frontend
                <Badge variant="secondary">Next.js 15</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• React 19 with TypeScript</li>
                <li>• Tailwind CSS</li>
                <li>• Shadcn/ui Components</li>
                <li>• TanStack Query</li>
                <li>• Zustand State Management</li>
                <li>• Form Validation with Zod</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                Features
                <Badge variant="secondary">Production Ready</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>• User Authentication</li>
                <li>• Protected Routes</li>
                <li>• Responsive Design</li>
                <li>• Type-safe API Client</li>
                <li>• Error Handling</li>
                <li>• Docker Support</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="quickstart" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="quickstart">Quick Start</TabsTrigger>
            <TabsTrigger value="development">Development</TabsTrigger>
            <TabsTrigger value="structure">Structure</TabsTrigger>
            <TabsTrigger value="api">API</TabsTrigger>
            <TabsTrigger value="deployment">Deployment</TabsTrigger>
          </TabsList>

          <TabsContent value="quickstart" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Getting Started</CardTitle>
                <CardDescription>Get up and running in minutes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Prerequisites</h3>
                  <ul className="space-y-1 text-sm list-disc list-inside">
                    <li>.NET 8 SDK</li>
                    <li>Node.js 18+</li>
                    <li>pnpm 8+ (required - npm/yarn are blocked)</li>
                    <li>PostgreSQL (or use Docker)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">1. Start the Database</h3>
                  <pre className="bg-muted p-3 rounded-md text-sm">
                    <code>docker-compose up -d</code>
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">2. Setup Backend</h3>
                  <pre className="bg-muted p-3 rounded-md text-sm">
                    <code>{`cd BackendApi
dotnet restore
dotnet ef database update
dotnet run`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">3. Setup Frontend</h3>
                  <pre className="bg-muted p-3 rounded-md text-sm">
                    <code>{`cd web
pnpm install
pnpm run dev`}</code>
                  </pre>
                </div>

                <div className="pt-2">
                  <p className="text-sm text-muted-foreground">
                    The backend will run on <code className="bg-muted px-1 py-0.5 rounded">http://localhost:5157</code>{' '}
                    and the frontend on <code className="bg-muted px-1 py-0.5 rounded">http://localhost:3000</code>
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="development" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Development Guidelines</CardTitle>
                <CardDescription>Package management, code quality, and best practices</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3 text-red-600">⚠️ Package Manager: pnpm Only</h3>
                  <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-md p-3 mb-3">
                    <p className="text-sm text-red-800 dark:text-red-200">
                      This project enforces <strong>pnpm</strong> as the package manager. npm and yarn are blocked.
                    </p>
                  </div>
                  <pre className="bg-muted p-3 rounded-md text-sm">
                    <code>{`# Install dependencies
pnpm install

# Add a new package
pnpm add package-name

# Add a dev dependency
pnpm add -D package-name

# Remove a package
pnpm remove package-name`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Code Quality Commands</h3>
                  <div className="space-y-3">
                    <div className="bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-md p-3">
                      <p className="text-sm font-medium text-blue-900 dark:text-blue-100 mb-1">
                        🔍 Always run lint before committing:
                      </p>
                      <pre className="bg-white dark:bg-gray-900 p-2 rounded text-xs mt-2">
                        <code>pnpm lint</code>
                      </pre>
                    </div>

                    <div className="space-y-2">
                      <div className="grid grid-cols-2 gap-2 text-sm">
                        <div>
                          <code className="bg-muted px-2 py-1 rounded block mb-1">pnpm lint</code>
                          <span className="text-xs text-muted-foreground">Check for linting errors</span>
                        </div>
                        <div>
                          <code className="bg-muted px-2 py-1 rounded block mb-1">pnpm lint:fix</code>
                          <span className="text-xs text-muted-foreground">Auto-fix linting issues</span>
                        </div>
                        <div>
                          <code className="bg-muted px-2 py-1 rounded block mb-1">pnpm format</code>
                          <span className="text-xs text-muted-foreground">Format code with Prettier</span>
                        </div>
                        <div>
                          <code className="bg-muted px-2 py-1 rounded block mb-1">pnpm format:check</code>
                          <span className="text-xs text-muted-foreground">Check formatting without changes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Linting Rules</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• ESLint with Next.js recommended rules</li>
                    <li>• TypeScript strict mode enabled</li>
                    <li>• Prettier integration for consistent formatting</li>
                    <li>• Import sorting and unused imports detection</li>
                    <li>• React hooks rules enforcement</li>
                    <li>• Accessibility rules for better UX</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Prettier Configuration</h3>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Print width: 120 characters</li>
                    <li>• Tab width: 2 spaces</li>
                    <li>• Single quotes for strings</li>
                    <li>• Trailing commas in multi-line</li>
                    <li>• No semicolons</li>
                    <li>• Arrow function parentheses: avoid when possible</li>
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold mb-3">Pre-commit Checklist</h3>
                  <div className="bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-md p-3">
                    <ol className="space-y-2 text-sm">
                      <li>
                        1. Run <code className="bg-yellow-100 dark:bg-yellow-900 px-1 rounded">pnpm lint</code> to check
                        for errors
                      </li>
                      <li>
                        2. Run <code className="bg-yellow-100 dark:bg-yellow-900 px-1 rounded">pnpm format</code> to
                        format code
                      </li>
                      <li>
                        3. Run <code className="bg-yellow-100 dark:bg-yellow-900 px-1 rounded">pnpm build</code> to
                        ensure build passes
                      </li>
                      <li>4. Test your changes thoroughly</li>
                      <li>5. Write descriptive commit messages</li>
                    </ol>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="structure" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Project Structure</CardTitle>
                <CardDescription>Understanding the codebase organization</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Backend Structure</h3>
                    <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                      <code>{`BackendApi/
├── Configuration/     # App configuration
├── Controllers/       # API endpoints
├── Data/             # Database context & migrations
├── Models/           # Data models & DTOs
├── Services/         # Business logic
└── Program.cs        # Application entry point`}</code>
                    </pre>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Frontend Structure</h3>
                    <pre className="bg-muted p-3 rounded-md text-sm overflow-x-auto">
                      <code>{`web/
├── src/
│   ├── app/          # Next.js app router pages
│   ├── components/   # React components
│   └── middleware.ts # Auth middleware
├── shared/           # Shared utilities
│   ├── api/         # API client
│   ├── hooks/       # Custom React hooks
│   ├── store/       # Zustand stores
│   └── types/       # TypeScript types
└── public/          # Static assets`}</code>
                    </pre>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>API Endpoints</CardTitle>
                <CardDescription>Available backend endpoints</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Authentication</h3>
                    <div className="space-y-2 text-sm">
                      <div className="grid grid-cols-3 gap-2">
                        <code className="bg-muted px-2 py-1 rounded">POST</code>
                        <code className="col-span-2">/api/auth/register</code>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <code className="bg-muted px-2 py-1 rounded">POST</code>
                        <code className="col-span-2">/api/auth/login</code>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <code className="bg-muted px-2 py-1 rounded">POST</code>
                        <code className="col-span-2">/api/auth/refresh</code>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <code className="bg-muted px-2 py-1 rounded">POST</code>
                        <code className="col-span-2">/api/auth/logout</code>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold mb-2">Users</h3>
                    <div className="space-y-2 text-sm">
                      <div className="grid grid-cols-3 gap-2">
                        <code className="bg-muted px-2 py-1 rounded">GET</code>
                        <code className="col-span-2">/api/user</code>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <code className="bg-muted px-2 py-1 rounded">PUT</code>
                        <code className="col-span-2">/api/user</code>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <p className="text-sm text-muted-foreground">
                      API documentation is available at{' '}
                      <code className="bg-muted px-1 py-0.5 rounded">http://localhost:5157/swagger</code>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="deployment" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Deployment Options</CardTitle>
                <CardDescription>Deploy your application to production</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Docker Deployment</h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    Build and run the entire stack with Docker Compose:
                  </p>
                  <pre className="bg-muted p-3 rounded-md text-sm">
                    <code>{`docker-compose -f docker-compose.prod.yml up --build`}</code>
                  </pre>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Environment Variables</h3>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Backend (.env):</p>
                    <pre className="bg-muted p-3 rounded-md text-sm">
                      <code>{`ConnectionStrings__DefaultConnection=
JWT__Secret=
JWT__Issuer=
JWT__Audience=`}</code>
                    </pre>

                    <p className="text-sm font-medium mt-3">Frontend (.env.local):</p>
                    <pre className="bg-muted p-3 rounded-md text-sm">
                      <code>{`NEXT_PUBLIC_API_URL=http://localhost:5157`}</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold mb-2">Cloud Platforms</h3>
                  <ul className="space-y-1 text-sm list-disc list-inside">
                    <li>Azure App Service (Backend) + Vercel (Frontend)</li>
                    <li>AWS ECS or Elastic Beanstalk</li>
                    <li>Google Cloud Run</li>
                    <li>Railway or Render (Full-stack)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>Key Features</CardTitle>
            <CardDescription>What makes this template production-ready</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="font-semibold mb-2">Security</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• JWT tokens with refresh mechanism</li>
                  <li>• HttpOnly cookies for token storage</li>
                  <li>• CORS configuration</li>
                  <li>• Password hashing with BCrypt</li>
                  <li>• Input validation and sanitization</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Developer Experience</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Hot reload in development</li>
                  <li>• TypeScript for type safety</li>
                  <li>• Swagger API documentation</li>
                  <li>• Consistent code formatting</li>
                  <li>• Error boundary handling</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Performance</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Optimized database queries</li>
                  <li>• React Query caching</li>
                  <li>• Next.js image optimization</li>
                  <li>• Code splitting and lazy loading</li>
                  <li>• Efficient state management</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Scalability</h3>
                <ul className="space-y-1 text-sm text-muted-foreground">
                  <li>• Microservices-ready architecture</li>
                  <li>• Database migration system</li>
                  <li>• Dependency injection</li>
                  <li>• Modular component structure</li>
                  <li>• API versioning support</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </ContentWrapper>
  )
}

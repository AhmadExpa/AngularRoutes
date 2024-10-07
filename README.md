This repository covers more advanced Angular concepts such as routing, guards, and lazy loading modules. It is the second part of my Angular learning journey, which I completed using the FreeCodeCamp 17-hour Angular course.

## Topics Covered

- **Routing:**
  - Defining routes with `RouterModule`
  - Route parameters and query parameters
  - Programmatic navigation using the Angular Router
  - Child routes

- **Lazy Loading:**
  - Splitting Angular modules using lazy loading
  - Configuring lazy-loaded routes
  - Implementing lazy-loaded **User** and **Admin** modules

- **Route Guards:**
  - **CanActivate** and **CanDeactivate** guards for protecting routes
  - **CanLoad** guard for lazy-loaded modules
  - Implementing **Resolve** for pre-fetching data
  - Auth guards for route-based authentication

- **Authentication:**
  - Login and logout functionality
  - Role-based access for routes
  - Managing session state and route access

- **Additional Features:**
  - Reactive forms with custom validation
  - MatSnackBar for notifications
  - Dynamic forms with FormArray
  - Error handling and alerts

## Admin Access

The Admin Module requires login to access. Use the following credentials to log in:

- **Email:** admin@gmail.com
- **Password:** admin123

Once logged in, you can manage room bookings and add new rooms in the Admin panel.

## How to Run

1. Clone the repository
2. Run `npm install` to install the necessary dependencies
3. Use `ng serve` to start the development server

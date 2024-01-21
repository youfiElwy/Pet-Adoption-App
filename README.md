# Pet Adoption and Care Platform

## Milestone 1 Documentation by Ahmed Yehia, Youssef Elwy, Yahia Ehab, Bahy Mohamed, Feras Elkharrat, Ahmed Osama

### Project Idea Introduction
Welcome to our Pet Adoption and Care Platform, a web-based solution designed to streamline the pet adoption process. In this documentation, we'll delve into the core functional and non-functional requirements, as well as its architectural design that forms the foundation of our application. From user registration and authentication to advanced features like pet listings and administrative control, our goal is to create a technically robust system that simplifies the pet adoption experience for both users and organizations.

### Conceptual Design
**Architectural Patterns**
We will merge microservices and MVC patterns. The app will be implemented independently using microservices to have loosely coupled service, improved fault isolation, and reusability. The communication between the microservices will be done through APIs. Internally, each service will follow the MVC pattern to achieve Improved collaboration, facilitating collaboration among development teams.

**Technology Stack**
- Frontend: React, Tailwind CSS
- Backend: Node.js, Express.js
- Network: HTTP/HTTPS, CORS

### User Interface (UI)
- Login, Sign Up, Add Adoption Posts, Browse Posts, View Post Details, Donate, Chat with the Adopter/Adoptee

### Database
Each service will have its own DB, allowing a mix of SQL and NoSQL. For NoSQL, we will use MongoDB, and for SQL, PostgreSQL.

### Authentication
The authentication mechanism will be an independent microservice, providing authentication APIs and managing user sessions across the system. JWT will be used for user authentication, and OAuth 2.0 will be implemented using Passport.js to enable users to continue with their Google accounts.

### Functional Requirements
1. **User Registration and Authentication**
   - Seamless user registration and authentication process.
   - Secure access and personalized user experiences.

2. **Search and Browse**
   - Users can search for adoptable pets based on various criteria.
   - View comprehensive pet profiles with photos and descriptions.

3. **Adoption Process**
   - Users can express interest by submitting adoption applications.
   - Agencies review applications and update pet statuses (available, pending, adopted).

4. **Pet Listing Management**
   - Shelters and organizations create/manage adoptable pet listings.
   - Users can list their pets after admin approval.

5. **User Profiles**
   - Users create/update profiles with personal information and pet-related activities.
   - Control over profile privacy settings.

6. **Messaging**
   - Integrated messaging system for effective communication between users and organizations.

7. **Notifications**
   - Users receive notifications on adoption updates, messages, and pet-related events.

8. **Pet Care Resources**
   - User-friendly platform for pet care resources, categorized for easy navigation.

9. **Reviews and Ratings**
   - Users can leave reviews and ratings for agencies and other users.

10. **Admin Panel**
    - Dashboard to manage user accounts, pet listings, and user-generated content.
    - Moderation of reported agencies.

11. **Payment Processing**
    - Secure payment methods, fee processing, and payment history access.

### Non-Functional Requirements
1. **Usability**
   - Intuitive design for a positive user experience.

2. **Platform Security**
   - Strict security requirements for account creation, password management, and account locking.

3. **Platform Compatibility**
   - Compatibility with all devices for users and administrators.

4. **Legal Compliance**
   - Adherence to user privacy laws (e.g., GDPR) and animal regulatory laws.

5. **Post Interaction**
   - Allow users to interact with posts (reactions, comments, reposts).
   - Reviews for adoption agencies and users for transparency.

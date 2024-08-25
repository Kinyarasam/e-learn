# Stadi Application
An educational web platform that allows collaborative learning through content creation and distribution leveraging multimedia formats.


## Stadi APIs

### Overview
This includes a custom user model with JWT authentication and a Videos API. Users can register, obtain JWT tokens, and manage video resources.

### Requirements

- Python 3.x
- Django 4.x
- djangorestframework
- django-rest-framework-simplejwt

### Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Kinyarasam/stadi
cd stadi_Api folder
Branch Backend
```

### 2. Create a Virtual Environment

Create a virtual environment to isolate your project dependencies.

```bash
python -m venv venv
```

Activate the virtual environment:

- On macOS/Linux:

  ```bash
  source venv/bin/activate
  ```

- On Windows:

  ```bash
  venv\Scripts\activate
  ```

### 3. Install Dependencies

Install the required dependencies using `requirements.txt`.

```bash
pip install -r requirements.txt
```

### 4. Apply Migrations

Run the following command to apply database migrations:

```bash
python manage.py migrate
```

### 5. Create a Superuser

Create a superuser account to access the Django admin panel.

```bash
python manage.py createsuperuser
```

### 6. Run the Development Server

Start the Django development server:

```bash
python manage.py runserver
```

The server will be running at `http://127.0.0.1:8000/`.

### API Endpoints

### Documentation
API Documentation: 
- **Redocs**: `/redoc/` (GET)
- **Swagger**: `/swagger/` (GET)

### Authentication Endpoints

- **Register**: `/api/auth/register/` (POST)
- **Obtain JWT Token**: `/api/auth/token/` (POST)
- **Refresh JWT Token**: `/api/auth/token/refresh/` (POST)
- **Verify JWT Token**: `/api/auth/token/verify/` (POST)

### Videos API Endpoints

- **List All Videos**: `/api/videos/` (GET)
- **Retrieve a Single Video**: `/api/videos/{id}/` (GET)
- **Create a New Video**: `/api/videos/` (POST)
- **Update an Existing Video**: `/api/videos/{id}/` (PUT/PATCH)
- **Delete a Video**: `/api/videos/{id}/` (DELETE)


### Running Migrations

Make and apply migrations for any changes to the models:

```bash
python manage.py makemigrations
python manage.py migrate
```

## License

This project is licensed under the MIT License - For Group 1 use only.
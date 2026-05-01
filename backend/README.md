'rest_framework',
'corsheaders',

'corsheaders.middleware.CorsMiddleware',

CORS_ALLOWED_ORIGINS = [
    'http://localhost:5173',
]

AUTH_USER_MODEL = 'auth.User'
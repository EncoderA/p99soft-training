import os
import jwt
from datetime import datetime, timedelta
from dotenv import load_dotenv

load_dotenv() 

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM  = os.getenv("ALGORITHM", "HS256")
EXPIRE_MIN = int(os.getenv("EXPIRE_MIN", 30))

USERS = {
    "ankush":  "ankush@123",
}

def verify_and_generate_token(username, password):
    if USERS.get(username) != password:
        return None

    payload = {
        "sub": username,
        "exp": datetime.utcnow() + timedelta(minutes=EXPIRE_MIN)
    }
    return jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)

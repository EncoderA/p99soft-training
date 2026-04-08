from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from services.auth import verify_and_generate_token

router = APIRouter()

class LoginRequest(BaseModel):
    username: str
    password: str

@router.post("/login")
def login(body: LoginRequest):
    token = verify_and_generate_token(body.username, body.password)
    
    if not token:
        raise HTTPException(status_code=401, detail="Invalid username or password")
        
    return {"token": token, "username": body.username}

# @router.get("/user/1")
# def getUser(body: )

backend 
cd c:\p99soft\login-backend
myenv\Scripts\activate

uvicorn main:app --reload

frontend 
cd c:\p99soft\login-backend\frontend
python -m http.server 5500

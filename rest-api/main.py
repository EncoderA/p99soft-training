from fastapi import FastAPI
from app.routes.item_routes import router as item_router

app = FastAPI(title="Items API")

app.include_router(item_router)

# from fastapi import FastAPI, HTTPException
# from pydantic import BaseModel
# from typing import Optional

# app = FastAPI()

# db = {
#     1: {"id": 1, "name": "Laptop", "description": "A powerful laptop", "price": 999.99},
#     2: {"id": 2, "name": "Mouse", "description": "Wireless mouse", "price": 29.99},
#     3: {"id": 3, "name": "Keyboard", "description": "Mechanical keyboard", "price": 79.99},
# }
# counter = 4

# class ItemCreate(BaseModel):
#     name: str
#     description: Optional[str] = None
#     price: float

# class ItemUpdate(BaseModel):
#     name: Optional[str] = None
#     description: Optional[str] = None
#     price: Optional[float] =  None

# @app.get("/items")
# def get_items():
#     return list(db.values())

# @app.get("/items/{item_id}")
# def get_item(item_id: int):
#     if item_id not in db:
#         raise HTTPException(status_code=404, detail="Item not found")
#     return db[item_id]

# @app.post("/items", status_code="201")
# def create_item(data: ItemCreate):
#     global counter
#     item = {"id": counter, **data.model_dump()}
#     db[counter] = item
#     counter += 1
#     return item
        
# @app.put("/items/{item_id}")
# def update_item(item_id: int, data: ItemUpdate):
#     if item_id not in db:
#         raise HTTPException(status_code=404, detail="items not found")
#     db[item_id].update(data.model_dump(exclude_none=True))
#     return db[item_id]

# @app.delete("/items/{items_id}", status_code=204)
# def delete_item(item_id: int):
#     if item_id not in db:
#         raise HTTPException(status_code=404, detail="Item not found")
#     del db[items_id]
    

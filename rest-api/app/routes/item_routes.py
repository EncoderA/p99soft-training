from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from typing import List
from app.database import get_db
from app.schemas import ItemCreate, ItemUpdate, ItemResponse
from app.services import item_service

router = APIRouter()


@router.get("/items/", response_model=List[ItemResponse])
def get_items(db: Session = Depends(get_db)):
    return item_service.get_all_items(db)


@router.get("/items/{item_id}", response_model=ItemResponse)
def get_item(item_id: int, db: Session = Depends(get_db)):
    return item_service.get_item_by_id(item_id, db)


@router.post("/items/", response_model=ItemResponse, status_code=201)
def create_item(data: ItemCreate, db: Session = Depends(get_db)):
    return item_service.create_item(data, db)


@router.put("/items/{item_id}", response_model=ItemResponse)
def update_item(item_id: int, data: ItemUpdate, db: Session = Depends(get_db)):
    return item_service.update_item(item_id, data, db)


@router.delete("/items/{item_id}", status_code=204)
def delete_item(item_id: int, db: Session = Depends(get_db)):
    item_service.delete_item(item_id, db)

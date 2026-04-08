from sqlalchemy.orm import Session
from fastapi import HTTPException
from app.models import Item
from app.schemas import ItemCreate, ItemUpdate


def get_all_items(db: Session):
    return db.query(Item).all()


def get_item_by_id(item_id: int, db: Session):
    item = db.query(Item).filter(Item.id == item_id).first()
    if not item:
        raise HTTPException(status_code=404, detail="Item not found")
    return item


def create_item(data: ItemCreate, db: Session):
    item = Item(**data.model_dump())
    db.add(item)
    db.commit()
    db.refresh(item)
    return item


def update_item(item_id: int, data: ItemUpdate, db: Session):
    item = get_item_by_id(item_id, db)
    for key, value in data.model_dump(exclude_none=True).items():
        setattr(item, key, value)
    db.commit()
    db.refresh(item)
    return item


def delete_item(item_id: int, db: Session):
    item = get_item_by_id(item_id, db)
    db.delete(item)
    db.commit()

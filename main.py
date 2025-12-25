from fastapi import FastAPI
from pydantic import BaseModel
from ai_chat import chat_reply
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)


class UserInput(BaseModel):
    message: str

@app.post("/chat")
def chat(data: UserInput):
    return {"reply": chat_reply(data.message)}

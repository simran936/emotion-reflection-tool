from fastapi import FastAPI, Request
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend to call this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow all origins for testing
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class TextRequest(BaseModel):
    text: str

@app.post("/analyze")
async def analyze_emotion(req: TextRequest):
    text = req.text.lower()

    if any(word in text for word in ["nervous", "anxious", "worried", "tense", "uneasy"]):
        return {
            "emotion": "Anxious",
            "emoji": "😟",
            "message": "Try some deep breathing. You're stronger than you think.",
            "color": "yellow"
        }
    elif any(word in text for word in ["happy", "excited", "joyful", "grateful", "smiling"]):
        return {
            "emotion": "Happy",
            "emoji": "😊",
            "message": "Keep that positive energy flowing!",
            "color": "green"
        }
    elif any(word in text for word in ["sad", "pain","depressed", "unhappy", "cry", "low", "upset", "gloomy", "mood swings"]):
        return {
            "emotion": "Sad",
            "emoji": "😢",
            "message": "It's okay to feel down. Be kind to yourself 💙",
            "color": "blue"
        }
    elif any(word in text for word in ["angry", "mad", "furious", "frustrated", "annoyed"]):
        return {
            "emotion": "Angry",
            "emoji": "😠",
            "message": "Let it out in a healthy way. Maybe take a walk?",
            "color": "red"
        }
    else:
        return {
            "emotion": "Neutral",
            "emoji": "😐",
            "message": "Keep going. Every emotion is valid.",
            "color": "gray"
        }

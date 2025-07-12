# Emotion Reflection Tool - Full Setup Guide

## 📋 Project Overview
A web application where users can:
- Enter text reflections (e.g., "I'm excited about tomorrow")
- Get emotion analysis with emoji and motivational message
- Mobile-first responsive design

## 🛠 Tech Stack
- **Frontend**: React + TypeScript + Tailwind CSS
- **Backend**: FastAPI (Python)
- **API**: REST (JSON format)

## 🚀 Complete Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/emotion-reflection-tool.git
cd emotion-reflection-tool
#frontend setup
cd frontend
npm install       # Install dependencies
npm run dev       # Start development server

#backend setup
cd ../backend

# Create virtual environment (choose your OS):
# Windows:
python -m venv venv
venv\Scripts\activate

# Mac/Linux:
python3 -m venv venv
source venv/bin/activate

# Install dependencies:
pip install fastapi uvicorn

# Start server:
uvicorn main:app --reload --port 8000
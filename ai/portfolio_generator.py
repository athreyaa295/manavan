from backend.services.ai_service import ai_service
import json

class PortfolioGenerator:
    def generate_config(self, resume_content: str) -> dict:
        prompt = f"""
        Based on the following resume, generate a configuration for a personal portfolio website:
        Resume: {resume_content}
        
        The config should include:
        1. Site Title
        2. Hero Headline
        3. Projects (extracted from resume)
        4. Experience Timeline
        5. Skills with categories
        6. Color Palette Suggestion (Modern/Dark/Light)
        
        Return ONLY a JSON object.
        """
        system_prompt = "You are a creative web designer and developer."
        response = ai_service.generate(prompt, system_prompt)
        
        try:
            clean_response = response.strip()
            if "```json" in clean_response:
                clean_response = clean_response.split("```json")[1].split("```")[0].strip()
            return json.loads(clean_response)
        except:
            return {"error": "Failed to parse portfolio config"}

portfolio_generator = PortfolioGenerator()

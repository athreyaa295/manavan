from backend.services.ai_service import ai_service
import json

class ATSAnalyzer:
    def analyze(self, resume_content: str, job_description: str) -> dict:
        prompt = f"""
        Compare the following resume with the job description and provide:
        1. ATS Score (0-100)
        2. Missing Keywords
        3. Optimization Suggestions
        
        Resume:
        {resume_content}
        
        Job Description:
        {job_description}
        
        Return the result ONLY as a JSON object with keys: "score", "missing_keywords", "suggestions".
        """
        system_prompt = "You are an ATS (Applicant Tracking System) algorithm simulator."
        response = ai_service.generate(prompt, system_prompt)
        
        try:
            # Attempt to parse JSON from response (handling potential markdown fences)
            clean_response = response.strip()
            if clean_response.startswith("```json"):
                clean_response = clean_response[7:-3].strip()
            elif clean_response.startswith("{") and clean_response.endswith("}"):
                pass
            return json.loads(clean_response)
        except Exception:
            return {
                "score": 0,
                "missing_keywords": [],
                "suggestions": "Error parsing AI response"
            }

ats_analyzer = ATSAnalyzer()

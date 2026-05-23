from backend.services.ai_service import ai_service
import json

class ResumeGenerator:
    def generate_summary(self, user_info: dict) -> str:
        prompt = f"""
        Generate a professional resume summary for the following person:
        Name: {user_info.get('name')}
        Experience: {user_info.get('experience')}
        Skills: {user_info.get('skills')}
        Education: {user_info.get('education')}
        
        The summary should be concise, impactful, and tailored for senior roles.
        """
        system_prompt = "You are a professional resume writer with years of recruitment experience."
        return ai_service.generate(prompt, system_prompt)

    def generate_bullet_points(self, role: str, description: str) -> str:
        prompt = f"""
        Rewrite the following job description into high-impact, results-oriented resume bullet points using action verbs:
        Role: {role}
        Description: {description}
        
        Use the STAR method where possible.
        """
        system_prompt = "You are an expert technical recruiter."
        return ai_service.generate(prompt, system_prompt)

resume_generator = ResumeGenerator()

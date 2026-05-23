from backend.services.ai_service import ai_service

class CoverLetterGenerator:
    def generate(self, resume_content: str, job_description: str, company_name: str) -> str:
        prompt = f"""
        Generate a highly personalized and compelling cover letter for the following:
        Company: {company_name}
        Job Description: {job_description}
        Candidate Resume: {resume_content}
        
        The letter should be professional, show cultural fit, and highlight specific achievements from the resume that match the job requirements.
        """
        system_prompt = "You are a world-class career coach and professional writer."
        return ai_service.generate(prompt, system_prompt)

cover_letter_generator = CoverLetterGenerator()

import os
from langchain_community.vectorstores import FAISS
from langchain_openai import OpenAIEmbeddings # Using this for placeholder, but can be replaced with local
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain.text_splitter import CharacterTextSplitter
from langchain.docstore.document import Document

class VectorDBManager:
    def __init__(self):
        self.db_path = "vector_db/faiss_index"
        self.embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
        self.vector_db = None

    def initialize_db(self, texts: list[str]):
        docs = [Document(page_content=t) for t in texts]
        self.vector_db = FAISS.from_documents(docs, self.embeddings)
        self.vector_db.save_local(self.db_path)

    def load_db(self):
        if os.path.exists(self.db_path):
            self.vector_db = FAISS.load_local(self.db_path, self.embeddings, allow_dangerous_deserialization=True)
        return self.vector_db

    def query(self, text: str, k: int = 3):
        if not self.vector_db:
            self.load_db()
        if self.vector_db:
            return self.vector_db.similarity_search(text, k=k)
        return []

vector_db_manager = VectorDBManager()

# videos/models.py

from django.db import models

from users.models import CustomUser


class Video(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    url = models.URLField(max_length=200)
    uploaded_by = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title

from django.db import models

from auth_app.models import CustomUser


class Video(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    url = models.URLField()
    author = models.ForeignKey(CustomUser, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title

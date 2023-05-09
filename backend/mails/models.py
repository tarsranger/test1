from django.db import models

class Email(models.Model):
    sender_name = models.CharField(max_length=100)
    email_subject = models.TextField(max_length=1000)
    received_at = models.DateTimeField(auto_now_add=True)
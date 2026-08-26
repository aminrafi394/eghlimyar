from django.contrib import admin
from django.contrib.auth.admin import UserAdmin

from .forms import CustomUserCreationForm, CustomUserChangeForm
from .models import User


@admin.register(User)
class CustomUserAdmin(UserAdmin):
    add_form = CustomUserCreationForm
    form = CustomUserChangeForm
    model = User

    list_display = (
        "username",
        "phone_number",
        "is_staff",
    )

    fieldsets = UserAdmin.fieldsets + (
        (
            "اطلاعات تکمیلی",
            {
                "fields": (
                    "phone_number",
                    "created_at",
                    "updated_at",
                )
            },
        ),
    )

    add_fieldsets = UserAdmin.add_fieldsets + (
        (
            "اطلاعات تکمیلی",
            {
                "fields": (
                    "phone_number",
                )
            },
        ),
    )

    readonly_fields = (
        "created_at",
        "updated_at",
    )
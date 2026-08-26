# Create your views here.


from django.shortcuts import render


def register(request):
    return render(request, "accounts/register.html")

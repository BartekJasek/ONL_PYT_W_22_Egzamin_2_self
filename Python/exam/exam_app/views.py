from urllib import response
from django.shortcuts import render
from django.http import HttpResponse
from django import views
from exam_app.models import User


# Create your views here.
class login(views.View):
    def get(self, request):
        return render(
            request,
            'login.html',
            context={
                'Person': Person,
            }
        )

    def post(self, request):
        login = request.POST.get('login')
        password = request.POST.get('password')
        intakes = User.objects.all().filter(login=login, password=password)

        for intake in intakes:
            if intake.login == login and intake.password == password:
                response.set_cookie(key='logged_in', value=True, max_age=60 * 60 * 24)
                return render(request, "Zalogowano.html")
            else:
                response.delete_cookie('logged_in')
                return render(request, "Błąd logowania!.html")


def divide(request, a, b):
    if request.method == 'GET':
        if b != 0:
            return HttpResponse(f"{a} / {b} = {a / b}")
        else:
            return HttpResponse("Nie można dzielić przez 0!")

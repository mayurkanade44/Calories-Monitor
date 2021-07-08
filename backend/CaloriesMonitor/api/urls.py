
from django.urls import path
from .views import  DataDetails, MyTokenObtainPairView, registerUser, DataList, DataTargetList, DataTargetUpdate
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
)

urlpatterns = [
    path('data/login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('data/register/',registerUser),
    # path('data/', addData),
    # path('datas/', getMyData ),
    path('data/', DataList.as_view()),
    path('data/target/', DataTargetList.as_view()),
    path('data/target/<int:id>/', DataTargetUpdate.as_view()),
    path('data/<int:id>/', DataDetails.as_view()),
]
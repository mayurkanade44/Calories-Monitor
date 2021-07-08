from .models import Data, DataTarget
from .serializers import DataSerializer, UserSerializer, DataTargetSerializer
from rest_framework.decorators import api_view, APIView, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from rest_framework import mixins
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password

# Create your views here.


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, attrs):
        data = super().validate(attrs)

        data['name'] = self.user.first_name
        return data


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(['POST'])
def registerUser(request):

    try:
        data = request.data
        user = User.objects.create(
            first_name=data['name'].title(),
            username=data['email'],
            email=data['email'],
            password=make_password(data['password'])
        )

        serializer = UserSerializer(user, many=False)
        return Response(serializer.data)
    except:
        msg = {'msg': 'User with this email id already exists'}
        return Response(msg, status=status.HTTP_400_BAD_REQUEST)


class DataList(APIView):
    permission_classes = [IsAuthenticated]

    def get(self,request):
        user = request.user
        datas = user.data_set.all()
        serializer = DataSerializer(datas, many=True)
        return Response(serializer.data)

    def post(self, request):
        user = request.user
        data = request.data

        datanew = Data.objects.create(
            user=user,
            date=data['date'],
            meals=data['meals'],
            calories=data['calories']
        )
        serializer = DataSerializer(datanew)
        return Response(serializer.data, status=status.HTTP_201_CREATED)



    # def post(self,request):
    #     serializer = DataSerializer(user=request.user, data=request.data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         return Response(serializer.data, status=status.HTTP_201_CREATED)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DataDetails(APIView):

    def get_object(self, id):
        try:
            return Data.objects.get(id=id)
        except Data.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def get(self, request, id):
        data = self.get_object(id)
        serializer = DataSerializer(data)
        return Response(serializer.data)

    def put(self,request, id):
        data = self.get_object(id)
        serializer = DataSerializer(data, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self,request,id):
        data = self.get_object(id)
        data.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


class DataTargetList(APIView):

    def get(self,request):
        user = request.user
        datas = user.datatarget_set.all()
        serializer = DataTargetSerializer(datas, many=True)
        return Response(serializer.data)

    def post(self, request):
        user = request.user
        data = request.data

        datanew = DataTarget.objects.create(
            user=user,
            target=data['target']
        )
        serializer = DataTargetSerializer(datanew)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

class DataTargetUpdate(APIView):

    def put(self,request, id):
        data = DataTarget.objects.get(id=id)
        serializer = DataTargetSerializer(data, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



# easist way to create CRUD by using mixins shown below

'''
class DataList(generics.GenericAPIView, mixins.ListModelMixin, mixins.CreateModelMixin):
    queryset = Data.objects.all()
    serializer_class = DataSerializer

    def get(self, request):
        return self.list(request)

    def post(self, request):
        return self.create(request)


class DataDetails(generics.GenericAPIView, mixins.RetrieveModelMixin, mixins.UpdateModelMixin, mixins.DestroyModelMixin):
    queryset = Data.objects.all()
    serializer_class = DataSerializer

    lookup_field = 'id'

    def get(self, request, id):
        return self.retrieve(request, id=id)

    def put(self, request, id):
        return self.update(request, id=id)

    def delete(self,request,id):
        return self.destroy(request, id=id)
'''



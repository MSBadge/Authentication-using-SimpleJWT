from school.models import Student
from rest_framework.serializers import HyperlinkedModelSerializer

class StudentSerializer(HyperlinkedModelSerializer):
    class Meta:
        model = Student
        fields = ['id','url','name','age','gender']
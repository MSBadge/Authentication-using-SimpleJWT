from rest_framework.serializers import ModelSerializer, CharField, HyperlinkedModelSerializer, Serializer
from accounts.models import User

class RegisterSerializer(HyperlinkedModelSerializer):
    password = CharField(write_only= True, min_length=8)
    class Meta:
        model = User
        fields = ['id', 'url', 'username', 'password', 'created_at']

    # def create(self, validated_data):
    #     user = User.objects.create_user(
    #         username = validated_data['username'],
    #         password = validated_data['password']
    #     )
    #     return user


from django.shortcuts import render
from django.views.generic import ListView, DetailView
from .models import Post


def home(request): #handle traffic from home page of blog
	context = { #a dictionary called context to track posts
		'posts': Post.objects.all()
	}
	return render (request, 'blog/home.html', context)


class PostListView(ListView):
	model = Post
	template_name = 'blog/home.html' # <app>/<model>_<viewtype>.html
	context_object_name = 'posts' 
	ordering = ['-date_posted']

class PostDetailView(DetailView):
	model = Post

def about(request):
	return render (request, 'blog/about.html', {'title': 'About'})

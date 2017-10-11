<?php

namespace App\Http\Controllers;

use App\Category;
use App\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function index() {
        $posts = Post::all();

        return response()->json($posts, 200);
    }


    public function show($id) {
        $post = Post::where('id', $id)->first();

        return response()->json($post, 200);
    }

    public function getPostsByCategory($id)
    {
        $posts = Post::where('category_id', $id)->get();

        return response()->json($posts);
    }

    public function store(Request $request) {
        $this->validate($request, [
            'title' => 'required|unique:posts|max:100',
            'abstract' => 'required|max:200',
            'content' => 'required',
            'category_id' => 'required|numeric|regex:/^[1-9]\d*$/'
        ]);

        Post::create($request->all());
    }


    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'title' => 'required|max:100',
            'abstract' => 'required|max:200',
            'content' => 'required',
            'category_id' => 'required|numeric|regex:/^[1-9]\d*$/'
        ]);

        $post = Post::findOrFail($id);

        $post->update($request->all());
    }

    public function destroy($id)
    {
        $post = Post::findOrFail($id);

        $post->delete();
    }
}

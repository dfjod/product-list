<?php

namespace Core;

class Router {
    protected $routes = [];
    protected $method;
    protected $uri;

    private function add($uri, $controller, $method)
    {
        $this->routes[] = [
            'uri' => $uri,
            'controller' => $controller,
            'method' => $method,
        ];
    }

    public function get($uri, $controller)
    {
        $this->add($uri, $controller, 'GET');
    }

    public function post($uri, $controller)
    {
        $this->add($uri, $controller, 'POST');
    }
    
    public function delete($uri, $controller)
    {
        $this->add($uri, $controller, 'DELETE');
    }
    
    public function setUri()
    {
        $this->uri = parse_url($_SERVER['REQUEST_URI'])['path'];
    }

    public function setMethod()
    {
        $this->method = $_POST['_method'] ?? $_SERVER['REQUEST_METHOD'];
    }

    public function route()
    {
        foreach ($this->routes as $route) {
            if($route['uri'] === $this->uri && $route['method'] === $this->method){
                return require $route['controller'];
            }
        }
        echo "Something went wrong!";
    }
}
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

    public function options($uri, $controller)
    {
        $this->add($uri, $controller, 'OPTIONS');
    }
    
    public function setUri()
    {
        $this->uri = parse_url($_SERVER['REQUEST_URI'])['path'];
    }

    public function setMethod()
    {
        $this->method = $_POST['_method'] ?? $_SERVER['REQUEST_METHOD'];
    }

    protected function abort()
    {
        echo '404 page not found!';
    }

    public function route()
    {
        foreach ($this->routes as $route) {
            if($route['uri'] === $this->uri && $route['method'] === $this->method){
                return require $route['controller'];
            }
        }
        $this->abort();
    }
}
<?php

    use Kirby\Data\Yaml;

    Kirby::plugin('beluga/belugakit', [
        'fields' => [
            'grid' => [
                'props' => [
            	    'value' => function ($value = []) {
            	        return Yaml::decode($value);
            	    }
                ]
            ]
        ]
    ]);

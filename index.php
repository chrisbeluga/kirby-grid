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
        ],
        'fieldMethods' => [
            'grid' => function($field, $type = null, $option = null) {

                if($type === null || $type !== 'class' && $type !== 'value')
                    throw new Exception('"value" or "class" required for first argument');

                if($option === null || $option !== 'span' && $option !== 'start' && $option !== 'end')
                    throw new Exception('"span", "start" or "end" required for second argument');

                $data = Yaml::decode($field->value);
                $response = $data[$type][$option];

                return $response;

            }
        ]
    ]);

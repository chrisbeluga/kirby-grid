<?php

    return [
        'grid' => function($field, $type = null, $option = null) {

            if(!$field->value)
                return null;

            if($type === null || $type !== 'class' && $type !== 'value')
                throw new Exception('"value" or "class" required for first argument');

            if($option === null || $option !== 'span' && $option !== 'start' && $option !== 'end')
                throw new Exception('"span", "start" or "end" required for second argument');

            $data = Yaml::decode($field->value);
            $response = $data[$type][$option];

            return $response;

        }
    ];

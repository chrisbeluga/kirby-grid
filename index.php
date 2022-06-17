<?php

    Kirby::plugin('beluga/grid', [
        'fields' => [
            'grid' => [
                'props' => require_once __DIR__ . '/config/props.php',
                'fieldMethods' => require_once __DIR__ . '/config/methods.php',
            ]
        ]
    ]);

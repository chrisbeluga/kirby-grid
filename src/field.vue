<template>

    <k-field
        class="k-form-field"
        v-bind:help="help"
        v-bind:label="label"
        v-bind:disabled="disabled"
        v-bind:required="required">
        <div
            class="k-grid-field">
            <div
                class="k-grid-container">
                <button
                    type="button"
                    class="k-grid-item"
                    v-for="(column, index) in columns"
                    v-bind:key="column"
                    v-on:click="in_selection(column)"
                    v-bind:class="{
                        'k-grid-active' : in_range(column)
                    }">
                    {{ column }}
                </button>
            </div>
        </div>
    </k-field>

</template>

<script>

    export default {
        name: 'k-grid-field',
        props: {
            help: {
                type: String,
                required: false
            },
            value: {
                type: [ String, Number ],
                required: false
            },
            label: {
                type: String,
                required: false
            },
            disabled: {
                type: Boolean,
                required: false
            },
            required: {
                type: Boolean,
                required: false
            },
            limit: {
                type: Number,
                required: false,
                default: 4
            },
            columns: {
                type: Number,
                required: false,
                default: 12
            },
            start: {
                type: Number,
                required: false,
                default: 1
            },
            end: {
                type: Number,
                required: false,
                default: 12
            },
            prefix: {
                type: String,
                required: false,
                default: ''
            },
            suffix: {
                type: String,
                required: false,
                default: ''
            }
        },
        data() {
			return {
                grid: {
                    span: 0,
                    end: null,
                    start: null,
                    limit: this.limit,
                    prefix: this.prefix,
                    suffix: this.suffix,
                    columns: this.columns,
                }
			}
		},
        watch: {
            grid: {
                handler() {
                    this.$emit('input', {
                        start: this.grid.start,
                        end: this.grid.end,
                        span: this.grid.span,
                        class: this.grid.prefix + this.grid.span + this.grid.suffix
                    })
                },
                deep: true
            }
        },
        methods: {
            in_selection(data) {
                if(data > this.grid.columns / 2) data = (this.grid.columns - data) + 1
                if(!this.in_limit(data)) return
                this.grid.start = data
                this.grid.end = this.grid.columns - (data - 1)
                this.grid.span = this.grid.columns - ((this.grid.start - 1) * 2)
            },
            in_limit(data) {
                return data <= this.grid.limit
            },
            in_range(data) {
                return (data - this.grid.start) * ((data - this.grid.end)) <= 0
            }
        },
        mounted() {
            if(Object.keys(this.value).length > 0) this.grid = Object.assign(this.grid, this.value)
        }
    }

</script>

<style lang="scss" scoped>

    .k-grid-field {
        display: flex;
        flex-direction: column;
        .k-grid-container {
            display: flex;
            gap: 10px;
            .k-grid-item {
                flex-grow: 1;
                display: flex;
                line-height: 1;
                cursor: pointer;
                align-items: center;
                justify-content: center;
                border: var(--field-input-border);
                padding: var(--field-input-padding);
                background: var(--field-input-background);
                line-height: var(--field-input-line-height);
                &.k-grid-active {
                    color: var(--color-white);
                    background: var(--color-blue-600);
                }
            }
        }
    }

</style>

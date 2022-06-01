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
                    v-for="(column, index) in options.columns"
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
            options: {
                type: Object,
                required: false,
                default: () => ({
                    limit: 0,
                    columns: 12
                })
            },
            offset: {
                type: Object,
                required: false,
                default: () => ({
                    start: 0,
                    end: 0
                })
            },
            prefix: {
                type: Object,
                required: false,
                default: () => ({
                    start: '',
                    end: '',
                    span: '',
                })
            },
            suffix: {
                type: Object,
                required: false,
                default: () => ({
                    start: '',
                    end: '',
                    span: '',
                })
            }
        },
        data() {
			return {
                grid: {
                    span: 0,
                    start: null,
                    end: null,
                }
			}
		},
        watch: {
            grid: {
                handler() {
                    this.$emit('input', {
                        class: {
                            start: this.prefix.start + (this.grid.start + this.offset.start) + this.suffix.start,
                            end: this.prefix.end + (this.grid.end + this.offset.end) + this.suffix.end,
                            span: this.prefix.span + (this.grid.span) + this.suffix.span
                        },
                        value: {
                            start: this.grid.start + this.offset.start,
                            end: this.grid.end + this.offset.end,
                            span: this.grid.span,
                        }
                    })
                },
                deep: true
            }
        },
        methods: {
            in_selection(data) {
                if(data > this.options.columns / 2) data = (this.options.columns - data) + 1
                if(!this.in_limit(data)) return
                this.grid.start = data
                this.grid.end = this.options.columns - (data - 1)
                this.grid.span = this.options.columns - ((this.grid.start - 1) * 2)
            },
            in_limit(data) {
                return data <= this.options.limit
            },
            in_range(data) {
                return (data - this.grid.start) * ((data - this.grid.end)) <= 0
            }
        },
        mounted() {
            if(Object.keys(this.value).length > 0) {
                this.grid = {
                    span: this.value.value.span,
                    start: this.value.value.start - this.offset.start,
                    end: this.value.value.end - this.offset.end,
                }
            }
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

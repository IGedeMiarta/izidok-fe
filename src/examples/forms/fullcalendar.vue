<template>
    <div>
        <PageTitle heading="FullCalendar" subheading="FullCalendar is great for displaying events, but it isn't a complete solution for event content-management. Beyond dragging an event to a different time/day, you cannot change an event's name or other associated data."/>
        <div class="card card-box mb-5">
            <div class="card-body">
                <full-calendar :events="events"></full-calendar>
            </div>
        </div>
    </div>
</template>

<script>
    import { FullCalendar } from 'vue-full-calendar'

    export default {
        components: {
            FullCalendar,
        },
        data() {
            return {
                events: [
                    {
                        title  : 'event1',
                        start  : '2010-01-01',
                    },
                    {
                        title  : 'event2',
                        start  : '2010-01-05',
                        end    : '2010-01-07',
                    },
                    {
                        title  : 'event3',
                        start  : '2010-01-09T12:30:00',
                        allDay : false,
                    },
                ]
            }
        }
    }
</script>
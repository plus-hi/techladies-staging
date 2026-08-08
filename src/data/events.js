import prefix from "../utils/prefix"

// Change status to "past" once an event is over — it moves from the Upcoming
// section near the top of the Programs page to the Past section at the bottom.
const events = [
  {
    status: "upcoming",
    title: "Saturday Nature Hike: Southern Ridges",
    date: "Sat, 22 Aug 2026 · 8:30am",
    image: `${prefix}/events/2026-08-22-southern-ridges-hike.jpg`,
    url: "https://luma.com/24qkprvm",
  },
]

export default events

import Container from "../ui/Container";
import Button from "../ui/Button";
import BlogCard from "../ui/BlogCard";

export default function LatestUpdates() {
  return (
    <section className="bg-white">
      <Container className="py-16">
        <div className="flex items-start justify-between gap-6">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight max-w-4xl">What's New? Fresh Updates from Our Agency</h2>
          <Button className="self-start">View All Post</Button>
        </div>

        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          <BlogCard
            title="Turning Passion into Profit: How Our Talent Agency Helps Creators Thrive"
            excerpt="Lorem ipsum dolor amet, consectetur adipiscing elit. Ut eros nec ante nam nec in litora duis. Ligula inceptos erat curae..."
            date="March 28, 2025"
            imageUrl="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop"
          />
          <BlogCard
            title="Why Brand–Influencer Collaborations Are the Key to Marketing Success"
            excerpt="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eros nec ante nam nec in litora duis..."
            date="March 28, 2025"
            imageUrl="https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1600&auto=format&fit=crop"
          />
          <BlogCard
            title="Want to Grow as an Influencer? Here's How Our Agency Can Help You"
            excerpt="Lorem ipsum dolor amet, consectetur adipiscing elit. Ut eros nec ante nam nec in litora duis. Ligula inceptos erat curae..."
            date="March 28, 2025"
            imageUrl="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop"
          />
        </div>
      </Container>
    </section>
  )
}



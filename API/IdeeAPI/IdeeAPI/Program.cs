using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);
builder.Services.AddDbContext<IdeeDb>(opt => opt.UseInMemoryDatabase("TodoList"));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();
var app = builder.Build();
app.UseCors();

app.MapGet("/", () => "Hello World!");

var idea = new[]
{

  "Scan and Shop App",
  "Mall Navigation App",
  "Restaurant Reservation or Booking App",
  "On-demand car wash App",
  "Criminal alert App",
  " Exam Study App",
  "Navigation App",
  "Online Flower And Gift Delivery App",
  "Supermarket Checkout App",
  "Restaurant Recommendation App",
  "Parking App",
  "Interior Design App",
  "Phone Silencer App",
  "Security Control App",
  "Finance And bill Management App",
  "Social Media Apps",
  "Ride Sharing App",
  "Language Translation App",
  "Productivity And Motivation App",
  "Intelligent Flirt App",
  "Receipt Management App",
  "Subscription-manager App",
  "Tenant Finder And Communication App",
  "Taxi Booking App",
  "Customized Restaurant App",
  "App For Refugees",
  "Cheap Delivery And Postal App",
  "Charity Donation App",
  "Transport App",
  "GST Return Filing App",
  "Note-Taking App",
  "Text Reader App",
  "Eat-together App",
  "Social Rating App",
  "Civil Construction App",
  "Interest-based Dating App",
  "Goal Tracking App",
  "Cloud Presentation App",
  "Messaging App",
  "Book Review App",
  "Restaurant or Food Delivery App",
  "Lost Item Tracker App",
  "Writer’s Solitude App",
  "Home Cleaning Service App",
  "Food Safety and Health Inspection App",
  "Social Goal Sharing App",
  "Profile Explorer App",
  "Shopping Assistant App",
  "Money Lending Manager App",
  "Anti-smartphone Addiction App",
  "Caller Image Identifier App",
  "Brand Identifier App",
  "Virtual Time Capsule App",
  "Selfie Competition And Compare App",
  "Grocery Delivery App",
  "Suicide Control App",
  "Shopping App",
  "All-In-One Help App",
  "Story Writing And Sharing App",
  "Party Planning And Invitation App",
  "Fashion Design And Shopping App",
  "Social Networking App",
  "Social Networking App",
  "Startup Assistance App",
  "Finding Small paid Work App",
  "Hair Coloring Assistance App",
  "Review and Earn App",
  "Finding Team Member App",
  "Consumer Guidance App",
  "Public Transport App",
  "Pub/club/restaurant Finder App",
  "Food Selection App",
  "Sync Camera App",
  "Random chat App",
  "Random Messaging App",
  "Digital Receipt App",
  "Travel App",
  "Song Finder App",
  "Beauty Specialist Hiring App",
  "Goods Exchange App",
  "Smart Alarm App",
  "Wishlist App",
  "Food Freshness Checker App",
  "Video Hosting App",
  "Tutor Finder App",
  "Toilet Finder App",
  "On-demand Health Check App",
  "Cards Game App",
  "People Finding App",
  "Kindness Sharing App",
  "Original Item Detector App",
  "Deal Alert App",
  "DIY Encouragement App",
  "Life Assistance App",
  "Giveaway App",
  "Health Video Chat App",
  "Location-based App",
  "Collective Shopping App",
  "Compatible Food Finder App",
  "All-in-one Launcher App",
  "Restaurant Booking App",
  "Freelancing App",
  "Investment App",
  "Digital CV/Resume App",
  "Guide Booking App",
  "Real-time Translation App",
  "Taxation App",
  "Safety/help Alert App",
  "Health Monitoring App",
  "Mobile Tutor App",
  "App Editor App"
};

app.MapGet("/ideeitems", async (IdeeDb db) =>
{
    var idee = idea[Random.Shared.Next(idea.Length)];
    return idee;
})
.WithName("GetWeatherForecast");


app.MapGet("/ideeitems/complete", async (IdeeDb db) =>
    await db.Ideen.Where(t => t.IsComplete).ToListAsync());

app.MapGet("/ideeitems/{id}", async (int id, IdeeDb db) =>
    await db.Ideen.FindAsync(id)
        is idee idee
            ? Results.Ok(idee)
            : Results.NotFound());

app.MapPost("/ideeitems", async (idee idee, IdeeDb db) =>
{
    db.Ideen.Add(idee);
    await db.SaveChangesAsync();

    return Results.Created($"/ideeitems/{idee.Id}", idee);
});

app.MapPut("/ideeitems/{id}", async (int id, idee inputTodo, IdeeDb db) =>
{
    var idee = await db.Ideen.FindAsync(id);

    if (idee is null) return Results.NotFound();

    idee.Name = inputTodo.Name;
    idee.IsComplete = inputTodo.IsComplete;

    await db.SaveChangesAsync();

    return Results.NoContent();
});

app.MapDelete("/ideeitems/{id}", async (int id, IdeeDb db) =>
{
    if (await db.Ideen.FindAsync(id) is idee idee)
    {
        db.Ideen.Remove(idee);
        await db.SaveChangesAsync();
        return Results.Ok(idee);
    }

    return Results.NotFound();
});

app.Run();

class idee
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public bool IsComplete { get; set; }
}

class IdeeDb : DbContext
{
    public IdeeDb(DbContextOptions<IdeeDb> options)
        : base(options)
    {
    }

    public DbSet<idee> Ideen => Set<idee>();
}

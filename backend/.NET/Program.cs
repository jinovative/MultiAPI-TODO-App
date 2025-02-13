using Microsoft.EntityFrameworkCore;
using TodoApi.Data;

var builder =WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<TodoDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddControllers();    
var app = builder.Build();
app.MapControllers();
app.Run();
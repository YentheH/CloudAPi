using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ChuckNorisServer.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Cors.Infrastructure;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

namespace ChuckNorisServer
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
            
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddDbContext<JokeListContext>(
                options => options.UseSqlServer(
                    Configuration.GetConnectionString("AzureDbConnection")
                )
            );

            services.AddMvc()
                .SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
        }

        
        public void Configure(IApplicationBuilder app, IHostingEnvironment env, JokeListContext context)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            DBInitializer.Initialize(context);
            app.UseCors(builder => builder
                                        .AllowAnyOrigin()
                                        .AllowAnyMethod()
                                        .AllowAnyHeader());
            app.UseMvc();
        }
    }
}

import React from "react";

export default function OverviewPage() {
  return (
    <div>
      <header className="flex justify-between items-center p-4 flex-row">
        <div>
          <button>
            <span>
              <p>Icon</p>
            </span>
            <span>
              <p>Search</p>
            </span>
          </button>
        </div>

        <div>
          <button>
            <span>
              <p>Icon</p>
            </span>
            <span>
              <p>Example@gmail.com</p>
            </span>
          </button>
        </div>
      </header>

      <main>
        <div className="Tittle">
          <h1>OverView</h1>
          <p>A snapshot of graduates, cohorts, and project activity.</p>
        </div>

        <div className="Cards">
          <div className="card">
            <p>Total Graduates</p>
            <h2>14</h2>
            <p> icon +2 this month</p>
          </div>

          <div className="card">
            <p>Active Cohorts</p>
            <h2>1</h2>
            <p> 3 total</p>
          </div>

          <div className="card">
            <p>Projects Shipped</p>
            <h2>17</h2>
            <p> icon +4 this month</p>
          </div>

          <div className="card">
            <p>Pending Applications</p>
            <h2>6</h2>
            <p> icon -1 this week</p>
          </div>
        </div>

        <div className="recent">
          <h2>Recent Activity</h2>
          <div>
            <ul>
              <li>
                <p>
                  Sana Ahmadi submitted a new project Skills Graph Visualizer
                </p>
                <span>2 hours ago</span>
              </li>

              <li>
                <p>Admin marked cohort as completed Cohort 2</p>
                <span>1 days ago</span>
              </li>

              <li>
                <p>Omid Rahimi updated graduate profile Omid Rahimi</p>
                <span>2 days ago</span>
              </li>

              <li>
                <p>Admin approved application Freshta Noori</p>
                <span>3 days ago</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="Quick_links">
          <h2>Quick links</h2>
          <div>
            <a>icon Manage Graduates</a>
          </div>

          <div>
            <a>icon Manage cohorts</a>
          </div>

          <div>
            <a>icon Manage projects</a>
          </div>

          <div>
            <a>icon Manage skills</a>
          </div>
        </div>
      </main>
    </div>
  );
}

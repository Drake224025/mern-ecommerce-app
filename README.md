## Database Tables

**templates**

| Column Name     | Data Type           | Description                                               |
| --------------- | ------------------- | --------------------------------------------------------- |
| id              | INTEGER PRIMARY KEY | Unique identifier for each template record                |
| title           | TEXT                | The name of the template                                  |
| description     | TEXT                | A brief overview of the template's style and purpose      |
| thumbnail_image | TEXT                | Path to an image file representing the template           |
| template_file   | TEXT                | Path to the file containing the template code             |
| price           | REAL                | The cost of the template                                  |
| category        | TEXT                | Template category for grouping (e.g., Modern, Minimalist) |

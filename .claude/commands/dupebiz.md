---
description: Duplicate a restaurant business - scrape menu from Uber Eats and business info from website
allowed-tools: Bash, Read, Write, Edit, WebFetch, Glob, Grep
---

# Dupe Business Command

You are duplicating a restaurant's data into this website template. 

## Pre-flight Checks

Read the current config files to understand the structure:
- `config/menu.json` - current menu structure
- `config/business.json` - current business info

---

## Phase 1: Update Menu 

### Step 1.1: Read Menu

Read the menu.json file.

### Step 1.2: Process Menu Response

1. Parse the menu.json file
2. Extract the `data.menu_categories` array
3. For each menu item with an image URL:
   - Download the image to `assets/images/menu/`
   - Name format: `{category_slug}-{item_slug}.jpg` (lowercase, hyphens)
   - Update the `image` field to the local path: `./assets/images/menu/filename.jpg`

### Step 1.3: Update menu.json

Write the processed data to `config/menu.json` with this structure:
```json
{
  "data": {
    "menu_categories": [
      {
        "category_name": "Category Name",
        "items": [
          {
            "name": "Item Name",
            "price": 15,
            "like_percentage": 85,
            "rating_count": 42,
            "description": "Description text",
            "image": "./assets/images/menu/category-item.jpg",
            "badges": ["Popular", "Halal"]
          }
        ]
      }
    ]
  },
  "metadata": {
    "request_id": "from-response",
    "generated_query": null,
    "screenshot": null
  }
}
```

---

## Phase 2: Update Business Information

### Step 2.1: Read Business.json

Read the business.json file.

### Step 2.2: Process Business Data

Map the data from `business.json` to the following structure:

```json
{
  "name": "Restaurant Name",
  "tagline": "Tagline or slogan",
  "description": "Full description paragraph",

  "contact": {
    "phone": {
      "primary": "+1 (514) 123-4567",
      "primaryRaw": "+15141234567",
      "booking": "+1 (514) 123-4567",
      "bookingRaw": "+15141234567"
    },
    "email": {
      "primary": "info@restaurant.com",
      "booking": "reservations@restaurant.com"
    }
  },

  "address": {
    "street": "123 Main Street",
    "city": "Montreal",
    "region": "QC",
    "postalCode": "H2X 1Y1",
    "country": "CA",
    "full": "123 Main Street, Montreal, QC H2X 1Y1",
    "fullMultiline": "123 Main Street<br>Montreal, QC H2X 1Y1",
    "mapsUrl": "https://maps.google.com/..."
  },

  "hours": {
    "daily": "11:00 AM - 10:00 PM",
    "dailyShort": "11AM-10PM",
    "sidebar": "Mon-Sun: 11:00 - 22:00",
    "footer": "Daily : 11:00 AM - 10:00 PM",
    "lunch": {
      "days": "Monday to Friday",
      "time": "11:00 AM - 3:00 PM",
      "full": "Monday to Friday, 11:00 AM - 3:00 PM"
    },
    "dinner": {
      "days": "Daily",
      "time": "5:00 PM - 10:00 PM",
      "full": "Daily, 5:00 PM - 10:00 PM"
    },
    "special": {
      "description": "",
      "start": "",
      "end": ""
    }
  },

  "social": {
    "facebook": "https://facebook.com/...",
    "instagram": "https://instagram.com/...",
    "twitter": "",
    "youtube": "",
    "googleMaps": "https://maps.google.com/..."
  },

  "branding": {
    "logoPath": "./assets/images/logo.png",
    "logoWidth": 160,
    "logoHeight": 50,
    "faviconPath": "./favicon.ico"
  },

  "legal": {
    "copyrightYear": "2024",
    "copyrightHolder": "Restaurant Name",
    "attribution": {
      "text": "Starter template by codewithsadee"
    }
  },

  "promotions": {
    "newsletter": {
      "title": "Subscribe Newsletter",
      "subtitle": "Get updates on specials and events",
      "discountPercent": 15,
      "discountText": "15% OFF"
    }
  }
}
```

### Step 2.3: Update business.json

Update 'business.json' file with the new structure


## Phase 3: Download Images

### Step 3.1: Create Menu Images Directory

```bash
mkdir -p assets/images/menu
```

### Step 3.2: Download Each Menu Image

For each menu item with an image URL:
1. Generate a clean filename: lowercase, replace spaces with hyphens, remove special chars
2. Download using curl: `curl -o "assets/images/menu/{filename}.jpg" "{image_url}"`
3. Update the item's `image` field to the local path

---

## Phase 4: Verification

### Step 4.1: Validate JSON Files

1. Read `config/menu.json` and verify it's valid JSON
2. Read `config/business.json` and verify it's valid JSON
3. Check that all required fields are present

### Step 4.2: Verify Images

1. List all files in `assets/images/menu/`
2. Confirm downloaded images exist and have non-zero size
3. Count total images downloaded

### Step 4.3: Generate Report

Provide a summary:
```
## Dupe Business Complete

### Restaurant Info
- Name: {name}

### Menu Stats
- Categories: {count}
- Items: {count}
- Images downloaded: {count}

### Business Data Updated
- Contact info: {yes/partial/no}
- Address: {yes/partial/no}
- Hours: {yes/partial/no}
- Social links: {yes/partial/no}

### Files Modified
- config/menu.json
- config/business.json
- assets/images/menu/ ({count} images)

### Manual Review Needed
- {list any fields that couldn't be scraped}
```

---

## Important Notes

1. **DESIGN-SYSTEM.md**: This project follows specific design patterns. The data you're updating feeds into:
   - `menu-loader.js` - renders menu from menu.json
   - `config-loader.js` - binds business.json to HTML via `data-config` attributes

2. **Image Naming**: Keep filenames URL-safe and descriptive

3. **Price Format**: Store prices as integers (dollars), not strings

4. **Phone Format**: Include both formatted (`+1 (514) 123-4567`) and raw (`+15141234567`) versions

5. **Error Handling**: If AgentQL fails, fall back to WebFetch for manual scraping

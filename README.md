# Fish Pond Mini-Game

This is a simple fish pond simulation game built with React and TypeScript.

## Features

- **Fish Simulation**: Fish swim around the pond with realistic behaviors.
- **Feeding**: Click to add food to the pond and watch the fish eat.
- **Customization**: Design your own fish with custom textures and shapes.
- **Persistence**: Your pond is saved locally and synced to the cloud.
- **Real-time Sync**: Share your pond with others and see changes in real-time.

## Architecture

### Texture Storage

- **Firestore**: Textures are stored in a `textures` collection in Firestore.
- **Deduplication**: Textures are deduplicated using a SHA-256 hash of the image data.
- **Caching**: Textures are cached locally in the browser's `localStorage` to reduce network requests.

### Data Flow

1. **Fish Creation**:
   - A new fish is created with a custom texture.
   - The texture is hashed and stored in the `textures` collection.
   - The fish object is updated with a reference to the texture.
2. **Cloud Sync**:
   - Fish and food data is synced to Firestore in real-time.
   - When data is loaded from the cloud, missing textures are fetched from the `textures` collection.
3. **Local Caching**:
   - Textures are cached in `localStorage` to improve performance.

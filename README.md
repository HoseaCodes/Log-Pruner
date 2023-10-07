# Log Prune

This GitHub repository houses an action designed to remove documents from a database that are older than seven days. Keeping your database clean and up-to-date is essential for efficient data management. With this action, you can automate the process of purging old records, ensuring that your database remains clutter-free and optimized for performance.

## Key Features:

- **Automatically removes documents** from a specified database that are older than seven days.
- **Customizable configuration** options to tailor the action to your specific needs.
- **Helps maintain data hygiene** and optimize database performance.
- **Easily integrate** this action into your workflow to schedule regular document cleanup tasks.

## Inputs

### `mongodb_url`

**Required** The mongodb url with username and password. Default `null`.

### `db_name`

**Required** The name of the database you would like to prune. Default `null`.

### `collection_name`

**Required** The name of the collection you would like to prune. Default `null`.

## Outputs

### None

## Example usage

```yaml
uses: HoseaCodes/Log-Pruner@v1.16
with:
    mongodb_url: ${{ secrets.MONGODB_URL }}
    db_name: 'forester'
    collection_name : 'forester'
```
## References

- [Github Docs](https://docs.github.com/en/actions/creating-actions/creating-a-javascript-action#testing-out-your-action-in-a-workflow)
- [Example Action](https://github.com/actions/javascript-action/tree/main)

## Future Enhancements

- [ ] Linter
- [ ] Prettier
- [ ] Versioning - Realses
- [ ] Unit Tests 
- [ ] Prune alternative databases

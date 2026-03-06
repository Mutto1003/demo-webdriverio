# Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/).

## Format

```
<type>(<scope>): <subject>
```

### Types

| Type | When to use |
|---|---|
| `feat` | New test, new page object, new locator |
| `fix` | Fix broken test or selector |
| `refactor` | Restructure code without changing behaviour |
| `docs` | Update documentation only |
| `chore` | Config changes, dependency updates |
| `test` | Add or update test specs |

### Scopes (optional)

| Scope | Description |
|---|---|
| `android` | Android-specific changes |
| `ios` | iOS-specific changes |
| `locs` | Locator changes |
| `config` | WDIO configuration |
| `pageobject` | Page object changes |

## Examples

```
feat(android): add OTP screen locators and page object
fix(locs): update skipButton XPath for Android 13
refactor(pageobject): extract waitAndClick helper
docs: update setup guide with iOS real device steps
chore: add deepmerge-ts to dependencies
```

## Tips

- Keep subject under 72 characters
- Use imperative mood ("add" not "added")
- Reference issue numbers when applicable: `fix(android): correct mobileInput selector (#12)`
